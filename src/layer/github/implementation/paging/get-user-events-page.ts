import { EffectResultSuccess } from '../../../..';
import { getOnePage } from '../generic/get-one-page/get-one-page.effect';

export interface GetUserEventsPageArgs {
  username: string;
  page: number;
}

export const getUserEventsPage = (args: GetUserEventsPageArgs) =>
  getOnePage('get-user-events-page', 'GET /users/{username}/events', {
    ...args,
    per_page: 100,
  });

export type EventsPageItems = EffectResultSuccess<typeof getUserEventsPage>;
