/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FacadeComponent } from './facade.component';

describe('FacadeComponent', () => {
  let component: FacadeComponent;
  let fixture: ComponentFixture<FacadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
