import { Component } from '@angular/core';
// import * as pdfMake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import * as html2pdf from 'html2pdf';
import jsPDF  from "jspdf";
import  {htmlToText} from 'html-to-text';
// import htmlToPdfmake  from 'html-to-pdfmake';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test'; 
  constructor() { 

  } 
  ngOnInit(): void { 
  }
}
