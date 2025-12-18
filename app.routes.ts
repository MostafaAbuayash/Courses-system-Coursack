import { Routes } from '@angular/router';
import { Home } from './home/home'; // Update this path to match your actual file location
import { AvailableCourses } from './available-courses/available-courses'; // Update this path to match your actual file location    
import { CourseDetails } from './course-details/course-details'; // Update this path to match your actual file location  
import {Cart} from './cart/cart';  
export const routes: Routes = [ 
    {
        path: '',
        component: Home
    },
    {
        path: 'available-courses',
        component: AvailableCourses
    },
    {
        path: 'course/:id',
        component: CourseDetails
    },
       {
        path: 'cart',
        component: Cart
    }

];
