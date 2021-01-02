import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpressoesRegularesPage } from './expressoes-regulares.page';

describe('ExpressoesRegularesPage', () => {
  let component: ExpressoesRegularesPage;
  let fixture: ComponentFixture<ExpressoesRegularesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressoesRegularesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpressoesRegularesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
