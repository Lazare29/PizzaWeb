import { SafeResourceUrl } from "@angular/platform-browser";
import { Observable } from "rxjs";

export interface IPizza{
    piz_id:number;
    piz_nom:string;
    piz_image:string;
    image:Observable<SafeResourceUrl>;
    piz_prix:string;
}