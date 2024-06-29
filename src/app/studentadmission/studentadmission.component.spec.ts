import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentadmissionComponent } from './studentadmission.component';

describe('StudentadmissionComponent', () => {
  let component: StudentadmissionComponent;
  let fixture: ComponentFixture<StudentadmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentadmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
