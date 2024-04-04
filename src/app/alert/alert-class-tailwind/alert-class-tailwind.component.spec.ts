import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { PRIMARY_ALERT } from "../alert.utils";
import { AlertClassTailwindComponent } from "./alert-class-tailwind.component";

describe("AlertClassTailwindComponent", () => {
	let component: AlertClassTailwindComponent;
	let fixture: ComponentFixture<AlertClassTailwindComponent>;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [AlertClassTailwindComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AlertClassTailwindComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
	it("should not set classes through NgClass during initialization", (): void => {
		const alert: DebugElement = fixture.debugElement.query(By.css("div.alert-tailwind"));
		expect(alert.classes["bg-sky-600"]).toBeFalsy();
		expect(alert.classes["bg-red-600"]).toBeFalsy();
		expect(alert.classes["bg-green-200"]).toBeFalsy();
	});
	it("should have styles of primary alert", (): void => {
		component.alert = { ...PRIMARY_ALERT };
		fixture.detectChanges();
		const alert: DebugElement = fixture.debugElement.query(By.css("div.alert-tailwind"));
		expect(alert.classes["bg-sky-600"]).toBeTrue();
	});
});
