import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>, 
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
    const accessToken = localStorage.getItem('accessToken');

    if (req.url.includes('/login') || req.url.includes('/register')) {
        return next(req);
    }

    if (accessToken) {
        const cloned = req.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return next(cloned);
    }

    return next(req);
};
