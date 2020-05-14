import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic YzVlOWVmODMtYTA3Yi00MThlLWJjZTEtNDAwZDcyZWVkYmUwOk1iN05jcFAyTjV6OHdOdWNuT1Y4bDBNUlBMOE52cEdp' 
  })

  // + btoa('c5e9ef83-a07b-418e-bce1-400d72eedbe0' + ':' + 'Mb7NcpP2N5z8wNucnOV8l0MRPL8NvpGi')
}