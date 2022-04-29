import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePlayerMsgComponent } from './remove-player-msg.component';

describe('RemovePlayerMsgComponent', () => {
  let component: RemovePlayerMsgComponent;
  let fixture: ComponentFixture<RemovePlayerMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePlayerMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePlayerMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
