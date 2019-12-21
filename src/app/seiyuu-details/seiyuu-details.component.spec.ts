import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeiyuuDetailsComponent } from './seiyuu-details.component';

describe('SeiyuuDetailsComponent', () => {
  let component: SeiyuuDetailsComponent;
  let fixture: ComponentFixture<SeiyuuDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeiyuuDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeiyuuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
