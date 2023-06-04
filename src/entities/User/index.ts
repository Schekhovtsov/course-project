export { userReducer, userActions } from './model/slice/userSlice';

export type { User, UserSchema } from './model/types/user';

export { UserRole } from './model/consts/consts';

export {
    selectUserAuthData,
    selectUserIsMounted,
    selectIsUserAdmin,
    selectIsUserModerator,
} from './model/selectors/userSelector';
