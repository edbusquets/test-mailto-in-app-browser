import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private iabs: InAppBrowser) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  public openWithCordovaBrowser(url: string) {
    let target = '_self';
    this.iabs.create(url, target, {
      location: 'no',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: 'Cancelar',
      beforeload: 'get'
    });
  }

  public openWithCordovaBrowserBlankWithoutBeforeLoad(url: string) {
    let target = '_blank';
    this.iabs.create(url, target, {
      location: 'no',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: 'Cancelar'
    });
  }
  
  public openWithCordovaBrowserBlank(url: string) {
    let target = '_blank';
    this.iabs.create(url, target, {
      location: 'no',
      hidenavigationbuttons: 'yes',
      closebuttoncaption: 'Cancelar',
      beforeload: 'get'
    });
  }
}
