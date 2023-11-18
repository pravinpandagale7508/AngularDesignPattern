import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobleConstants {
    public TEST = "testval";
    public TEST2 = "testval2";
    public POKER_TABLES=[
    {name:"2 # Player",numSeats:2,bet:5,rake:3},
    {name:"3 # Player",numSeats:3,bet:5,rake:3},
    {name:"4 # Player",numSeats:4,bet:5,rake:3},
    {name:"5 # Player",numSeats:5,bet:5,rake:3},
    {name:"6 # Player",numSeats:6,bet:5,rake:3},]
}