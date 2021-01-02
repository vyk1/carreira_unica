import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegularesPage } from './regulares.page';

describe('RegularesPage', () => {
  let component: RegularesPage;
  let fixture: ComponentFixture<RegularesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegularesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
