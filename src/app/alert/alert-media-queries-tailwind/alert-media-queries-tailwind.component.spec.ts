import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { PRIMARY_ALERT } from "../alert.utils";
import { AlertMediaQueriesTailwindComponent } from "./alert-media-queries-tailwind.component";

describe("AlertMediaQueriesTailwindComponent", () => {
	let component: AlertMediaQueriesTailwindComponent;
	let fixture: ComponentFixture<AlertMediaQueriesTailwindComponent>;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [AlertMediaQueriesTailwindComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AlertMediaQueriesTailwindComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
	it("should not set classes through NgClass during initialization", (): void => {
		const alerts: DebugElement[] = fixture.debugElement.queryAll(By.css("div.alert-tailwind"));
		alerts.forEach(alert => {
			expect(alert.classes["alert-primary-tailwind"]).toBeFalsy();
			expect(alert.classes["alert-success-tailwind"]).toBeFalsy();
			expect(alert.classes["alert-danger-tailwind"]).toBeFalsy();
		});
	});
	it("should have styles of primary alert", (): void => {
		component.alert = { ...PRIMARY_ALERT };
		fixture.detectChanges();
		const alerts: DebugElement[] = fixture.debugElement.queryAll(By.css("div.alert-tailwind"));
		alerts.forEach(alert => {
			expect(alert.classes["alert-success-tailwind"]).toBeFalsy();
			expect(alert.classes["alert-danger-tailwind"]).toBeFalsy();
			expect(alert.classes["alert-primary-tailwind"]).toBeTrue();
		});
	});
});
