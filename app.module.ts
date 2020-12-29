import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { MustMatchDirective } from 'src/app/template/template.directive';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        TemplateComponent,
        MustMatchDirective,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }