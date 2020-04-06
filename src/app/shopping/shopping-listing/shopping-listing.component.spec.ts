import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListingComponent } from './shopping-listing.component';

describe('ShoppingListingComponent', () => {
  let component: ShoppingListingComponent;
  let fixture: ComponentFixture<ShoppingListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
