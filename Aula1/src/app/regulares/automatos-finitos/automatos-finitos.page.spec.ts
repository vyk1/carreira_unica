import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutomatosFinitosPage } from './automatos-finitos.page';

describe('AutomatosFinitosPage', () => {
  let component: AutomatosFinitosPage;
  let fixture: ComponentFixture<AutomatosFinitosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatosFinitosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutomatosFinitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
