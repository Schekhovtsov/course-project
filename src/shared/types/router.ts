import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line feature-sliced-design/layers-hierarchy
import { UserRole } from '@/entities/User';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
