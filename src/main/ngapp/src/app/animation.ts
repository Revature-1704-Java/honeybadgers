import { trigger, state, animate, transition, query, style } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation',
    [
        transition(':enter',
        [
            style({ opacity: 0 }),
            animate('1s', style({ opacity: 1 }))
        ]),
    ]);

export const slideRightAnimation = trigger(
    'slideInRight',
    [
      transition('* <=> *', [
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(-100%)'
          }),
          {optional: true}),
          query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width: '100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional: true}),
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional: true}),
    ])
  ]
);


