import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { UserModel } from "../../../../shared/models/user.model";
import { RolesEnum } from "../../../../core/enums/roles.enum";

@Component({
  selector: 'app-booking-nav',
  templateUrl: 'booking-nav.component.html',
  styleUrls: ['booking-nav.component.scss']
})
export class BookingNavComponent {
  @Input() today!: FormControl;
  @Input() user!: UserModel;
  roles = RolesEnum;
}
