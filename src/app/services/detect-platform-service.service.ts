import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { find } from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class DetectPlatformService {

    isDevice: boolean = false;

    constructor(
        private platform: Platform, ) { }

    setPlatform(): void {

        const platforms: string[] = this.platform.platforms();
        const platform: string = find(platforms, (p: string) => {
            return p === 'capacitor';
        });

        this.isDevice = platform ? true : false;
    } 
    testeplatform(){
      console.log(this.platform.platforms());
      console.log(this.device.platform);
    }  

}