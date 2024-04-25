import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { PRIMARY_ALERT } from "../alert.utils";
import { AlertApplyTailwindComponent } from "./alert-apply-tailwind.component";

describe("AlertApplyTailwindComponent", (): void => {
	let component: AlertApplyTailwindComponent;
	let fixture: ComponentFixture<AlertApplyTailwindComponent>;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [AlertApplyTailwindComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AlertApplyTailwindComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
	it("should not set classes through NgClass during initialization", (): void => {
		const alert: DebugElement = fixture.debugElement.query(By.css("div.alert-tailwind"));
		expect(alert.classes["alert-primary-tailwind"]).toBeFalsy();
		expect(alert.classes["alert-success-tailwind"]).toBeFalsy();
		expect(alert.classes["alert-danger-tailwind"]).toBeFalsy();
	});
	it("should have styles of primary alert", (): void => {
		component.alert = { ...PRIMARY_ALERT };
		fixture.detectChanges();
		const alert: DebugElement = fixture.debugElement.query(By.css("div.alert-tailwind"));
		expect(alert.classes["alert-primary-tailwind"]).toBeTrue();
	});
	it("should click the button", (done: DoneFn): void => {
		const emitSpy = spyOn(component.resetRequested, "emit");
		dispatchButtonEvent(fixture).then((): void => {
			expect(emitSpy).toHaveBeenCalled();
			done();
		});
	});
});

function dispatchButtonEvent(fixture: ComponentFixture<unknown>): Promise<unknown> {
	const button: DebugElement = fixture.debugElement.query(By.css("button"));
	button.nativeElement.dispatchEvent(new Event("click"));
	fixture.detectChanges();
	return fixture.whenStable();
}
