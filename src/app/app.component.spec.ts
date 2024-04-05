import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DANGER_ALERT, DEFAULT_ALERT, PRIMARY_ALERT, SUCCESS_ALERT } from "./alert/alert.utils";
import { AppComponent } from "./app.component";

describe("AppComponent", (): void => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [AppComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
	it("should have the 'Tailwind' title", (): void => {
		const compiled = fixture.nativeElement as HTMLElement;
		const title = compiled.querySelector(".title")?.textContent;
		expect(title).toEqual("Tailwind");
	});
	it("should render three buttons", (): void => {
		const compiled = fixture.nativeElement as HTMLElement;
		const buttons = compiled.querySelectorAll(".my-button");
		expect(buttons.length).toBe(3);
	});
	describe("should test button to change alert type", (): void => {
		it("case primary", (): void => {
			const buttonSpy = spyOn(component, "onChangeAlertType");
			const compiled = fixture.nativeElement as HTMLElement;
			const buttons = compiled.querySelectorAll<HTMLElement>(".my-button");
			buttons[0].click();
			expect(buttonSpy).toHaveBeenCalledWith("primary");
		});
		it("case danger", (): void => {
			const buttonSpy = spyOn(component, "onChangeAlertType");
			const compiled = fixture.nativeElement as HTMLElement;
			const buttons = compiled.querySelectorAll<HTMLElement>(".my-button");
			buttons[1].click();
			expect(buttonSpy).toHaveBeenCalledWith("danger");
		});
		it("case success", (): void => {
			const buttonSpy = spyOn(component, "onChangeAlertType");
			const compiled = fixture.nativeElement as HTMLElement;
			const buttons = compiled.querySelectorAll<HTMLElement>(".my-button");
			buttons[2].click();
			expect(buttonSpy).toHaveBeenCalledWith("success");
		});
	});
	describe("should test #onChangeAlertType", (): void => {
		it("case primary", (): void => {
			component.onChangeAlertType("primary");
			expect(component.alert).toEqual(PRIMARY_ALERT);
		});
		it("case danger", (): void => {
			component.onChangeAlertType("danger");
			expect(component.alert).toEqual(DANGER_ALERT);
		});
		it("case success", (): void => {
			component.onChangeAlertType("success");
			expect(component.alert).toEqual(SUCCESS_ALERT);
		});
		it("case default", (): void => {
			component.onChangeAlertType("default");
			expect(component.alert).toEqual(DEFAULT_ALERT);
		});
	});
});
