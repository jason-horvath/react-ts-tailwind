import { FC, useEffect, useRef } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBox from '@mui/icons-material/IndeterminateCheckBox';
import { countActions } from '@store/actions';
import { Heading } from '@block';
import { Button, NumberInput } from '@form';
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
  }, [dispatch, initialCount, setCount]);

  return (
    <div className="count">
      <div className="count__controls">
        <Heading level={2} className="count__heading heading ">Count</Heading>
        <div>
          <Button aria-label="Decrement"
            onClick={() => dispatch(decrement())}>
            <IndeterminateCheckBox/>
          </Button>
          <span className="count__value">{count}</span>
          <Button aria-label="Increment"
            onClick={() => dispatch(increment())}>
            <AddBoxIcon/>
          </Button>
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
            <Button aria-label="Decrement By"
              onClick={() => dispatch(decrementBy(changeByRef.current?.value))}>
                Decrement By
            </Button>
            <Button aria-label="Increment By"
              onClick={() => dispatch(incrementBy(changeByRef.current?.value))}>
                Increment By
            </Button>  
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Count;