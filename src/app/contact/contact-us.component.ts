import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms/src/directives';

import { ContactService } from './contact.service';

@Component({
    moduleId:    module.id,
    templateUrl: 'contact-us.component.html'
})
export class ContactUsComponent {
    constructor(private _contactService: ContactService){}

    sendMessage(form: NgForm) {
        this._contactService.postContactForm(form.value);
    }
}