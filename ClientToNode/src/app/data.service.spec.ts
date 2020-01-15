import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

describe('AllTestsForDataService',()=>{

  beforeEach(() => TestBed.configureTestingModule({}));

  it("Integer Test", ()=>{

    let service: DataService = TestBed.get(DataService);
    let result =  service.Add(10,20);
    expect(result).toBe(30);
  })

  it("Other Input Test", ()=>{
    let service: DataService = TestBed.get(DataService);
    let result =  service.Add("10","20");
    expect(result).toBe("1020");
  })

  it("Float Zero Test", ()=>{
    let service: DataService = TestBed.get(DataService);
    let result =  service.Add(10.2,20.2);
    expect(result).toBe(30.4);
//    expect(0).toBe(0);
  })


});
