import { Component } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { WatsonMLService } from './watson-ml-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dnd';

  constructor(private watsonMLService: WatsonMLService) { }

  dataFromServer: any = [];

  public csvJSON(csvText) {
    var lines = csvText.split("\r\n");

    const headers = ["ACCOUNT", "USERNAME", "auth|securityinfo", "auth|securitynotice", "crond", "sshd", "su"]; 
//    const headers = lines[0].split(",");
    console.log(headers);
    var values = [];
    for (var i = 1; i < lines.length-1; i++) { 
      //values.push(lines[i].split(","))
      var obj = [];
      var currentline = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
          if (j>1) {
            obj.push(parseInt(currentline[j]));
          } else {
            obj.push(currentline[j]);
          }
      }
      values.push(obj);
    }
    const result = { "fields" : headers, "values" : values };
    console.log(JSON.stringify(result));
    return result;
  }
  
  public files: NgxFileDropEntry[] = [];
 
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        const reader = new FileReader();

        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          
          console.log(droppedFile.relativePath, file);
          console.log(file.name);
          reader.readAsText(file);
          reader.onload = () => {
              console.log(reader.result);
              this.watsonMLService.getPrediction(this.csvJSON(reader.result)).subscribe(
                data => { console.log(data); 
                  this.dataFromServer = data;
                },
                err => { console.log(err) },
                () => console.log("watsonMLService Done")
              );
          };

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }
}
