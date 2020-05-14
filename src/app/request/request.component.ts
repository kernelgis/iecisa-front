import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../shared/services/request.service';
import { RequestI } from '../shared/models/request-i.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };
  //postData que va en el body
  postData = {
    DocumentTypes: [
      "9"
    ],
    TimeoutSec: 3600,
    PhoneNumber: '+51993022806',
    Email: 'jfranco88@gmail.com',
    TransportType: 1,
    IntroductionText: ''
  };

  cors = 'https://cors-anywhere.herokuapp.com/'
  postNotification = 'https://idlok.ipsidy.net/IDCompleteBackendEngine/Default/AdministrationServiceRest/foreignOperations/documents';
  getPictureStatus = 'https://idlok.ipsidy.net/IDCompleteBackendEngine/Default/AdministrationServiceRest/foreignOperations/documents/';
  getResultados = 'https://idlok.ipsidy.net/IDCompleteBackendEngine/Default/AdministrationServiceRest/operations/verifications/';

  documento = '4cef67f4-e7d8-4324-b7ea-9f4ada4a96e6'

  data: RequestI = {
    DocumentTypes: [
      '9'
    ],
    TimeoutSec: 3600,
    PhoneNumber: '+51982891136',
    Email: 'kernelgis@gmail.com',
    TransportType: 1,
    IntroductionText: 'Please Respond to Document Verification Request'
  }

  formRequest: FormGroup;


  constructor(
    private requestSvc: RequestService,
    private fb: FormBuilder
  ) {

    this.formRequest = this.initForm();

    // this.requestSvc.newRequest(this.data)
    //   .subscribe(r => {
    //     console.log(r.Status);
    //   },
    //   e => {
    //     console.log('Error:', e);
    //   })

    /*       
        this.http.get(this.cors + this.getResultados + this.documento, {
          headers:{
            'Content-type': 'application/json',
            'Authorization': 'Basic YzVlOWVmODMtYTA3Yi00MThlLWJjZTEtNDAwZDcyZWVkYmUwOk1iN05jcFAyTjV6OHdOdWNuT1Y4bDBNUlBMOE52cEdp'
          }
        }).subscribe(
          data => console.log(data),
          err => console.log(err),
          () => console.log('Peticion finalizada')
          
          )
     */
  }


  ngOnInit() {

  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: [''],
      apellidos: [''],
      celular: ['', [Validators.required]],
      email: ['', [Validators.required]],
      accept: ['', [Validators.required]],
      notificationType: ['0'],
      dniType: ['9']
    })
  }

  putData(f: FormGroup, tipoNotificacion: number): RequestI {
    return {
      DocumentTypes: [f.get('dniType').value],
      TimeoutSec: 3600,
      PhoneNumber: `+51${f.get('celular').value}`,
      Email: f.get('email').value,
      TransportType: tipoNotificacion,
      IntroductionText: 'Por favor responda a la solicitud de verificación de documentos que se le envió.'
    }
  }

  onSubmit(f: FormGroup): void {
    if (f.valid) {
      console.log(f.get('notificationType').value);
      switch (parseInt(f.get('notificationType').value)) {
        case 1:
          console.log('NOTIFICACION POR SMS');
          this.requestSvc.newRequest(this.putData(f, 1))
            .subscribe(r => {
              console.log(r);
            })
          break;
        case 2:
          console.log('NOTIFICACION EMAIL');
          this.requestSvc.newRequest(this.putData(f, 2))
            .subscribe(r => {
              console.log(r);

            })

          break;

        default:
          break;
      }
      // console.log(f.value);
    }
  }
}
