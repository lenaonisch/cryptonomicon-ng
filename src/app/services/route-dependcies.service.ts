//https://habr.com/ru/post/544590/
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteDependciesService {

  constructor(public router: Router) {}

  
}