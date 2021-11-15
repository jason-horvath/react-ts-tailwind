import { FC, useEffect, useRef } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import { countActions } from '@store/actions';
import { NumberInput } from '@form';
import './Count.css';

interface CountProps {
  initialCount?: number;
};

const Count: FC<CountProps> = ({ initialCount }): JSX.Element => {

  const { decrement, increment, decrementBy, incrementBy, setCount } = {...countActions};
  const count: number = useSelector((state: RootStateOrAny) => state.count.value);
  const dispatch = useDispatch();
  const changeByRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (initialCount != null) {
      dispatch(setCount(initialCount));
    }
  }, [dispatch, initialCount, setCount])

  return (
    <div className="count">
      <div className="count__controls">
        <h1 className="count__heading">Count</h1>
        <div>
          <button aria-label="Decrement"
            onClick={() => dispatch(decrement())}>
            <RemoveCircleTwoToneIcon/>
          </button>
          <span className="count__value">{count}</span>
          <button aria-label="Increment"
            onClick={() => dispatch(increment())}>
            <AddCircleTwoToneIcon/>
          </button>
        </div>
        <div>
          <div>
            <NumberInput
              className="count__changeby"
              inputRef={changeByRef}
              defaultValue={200}
            />
          </div>
          <div>
            <button aria-label="Decrement By"
              onClick={() => dispatch(decrementBy(changeByRef?.current?.value))}>
                Decrement By
            </button>
            <button aria-label="Increment By"
              onClick={() => dispatch(incrementBy(changeByRef?.current?.value))}>
                Increment By
            </button>  
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Count;