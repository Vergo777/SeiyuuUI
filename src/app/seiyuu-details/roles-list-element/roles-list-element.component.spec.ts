import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesListElementComponent } from './roles-list-element.component';

describe('RolesListElementComponent', () => {
  let component: RolesListElementComponent;
  let fixture: ComponentFixture<RolesListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
