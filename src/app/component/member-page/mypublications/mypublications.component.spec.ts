import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypublicationsComponent } from './mypublications.component';

describe('MypublicationsComponent', () => {
  let component: MypublicationsComponent;
  let fixture: ComponentFixture<MypublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
