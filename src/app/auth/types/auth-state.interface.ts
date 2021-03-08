import { CurrentUserInterface } from '../../shared/types/current-user';
import { BackendErrorsInterface } from '../../shared/types/backend-errors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
