import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeAdminComponent } from './edit-employee-admin.component';

describe('EditEmployeeAdminComponent', () => {
  let component: EditEmployeeAdminComponent;
  let fixture: ComponentFixture<EditEmployeeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditEmployeeAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
