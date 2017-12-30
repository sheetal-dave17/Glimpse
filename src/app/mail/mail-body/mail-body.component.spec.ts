import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailBodyComponent } from './mail-body.component';

describe('MailBodyComponent', () => {
  let component: MailBodyComponent;
  let fixture: ComponentFixture<MailBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
