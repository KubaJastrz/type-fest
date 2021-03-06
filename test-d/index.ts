import {expectType} from 'tsd';
import {ObservableLike} from '..';

// eslint-disable-next-line no-use-extend-native/no-use-extend-native
expectType<symbol>(Symbol.observable);

const observable = (null as any) as ObservableLike;

observable.subscribe(() => {});
observable.subscribe(value => expectType<unknown>(value));
