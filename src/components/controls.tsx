import * as React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { Meter as BaseMeter } from '@base-ui/react/meter';
import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import { OTPField as BaseOTPField } from '@base-ui/react/otp-field';
import { Progress as BaseProgress } from '@base-ui/react/progress';
import { Radio as BaseRadio } from '@base-ui/react/radio';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';
import { Slider as BaseSlider } from '@base-ui/react/slider';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import { Toggle as BaseToggle } from '@base-ui/react/toggle';
import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group';
import { CheckIcon, cx } from '../utils';

export const Label = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'label'>) => <label className={cx('ps-label', className)} {...props} />;

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentPropsWithoutRef<'textarea'>>(function Textarea({ className = '', ...props }, ref) {
  return <textarea ref={ref} className={cx('ps-textarea', className)} {...props} />;
});

export const NativeSelect = React.forwardRef<HTMLSelectElement, React.ComponentPropsWithoutRef<'select'>>(function NativeSelect({ className = '', children, ...props }, ref) {
  return <span className="ps-native-select"><select ref={ref} className={cx('ps-native-select__control', className)} {...props}>{children}</select><IconChevronDown aria-hidden="true" /></span>;
});

export function Checkbox({ className = '', children, ...props }: React.ComponentProps<typeof BaseCheckbox.Root>) {
  return <BaseCheckbox.Root className={cx('ps-checkbox', className)} {...props}><BaseCheckbox.Indicator className="ps-checkbox__indicator"><CheckIcon /></BaseCheckbox.Indicator>{children}</BaseCheckbox.Root>;
}

export function Switch({ className = '', ...props }: React.ComponentProps<typeof BaseSwitch.Root>) {
  return <BaseSwitch.Root className={cx('ps-switch', className)} {...props}><BaseSwitch.Thumb className="ps-switch__thumb" /></BaseSwitch.Root>;
}

export function RadioGroup({ className = '', ...props }: React.ComponentProps<typeof BaseRadioGroup>) {
  return <BaseRadioGroup className={cx('ps-radio-group', className)} {...props} />;
}

export function RadioGroupItem({ className = '', ...props }: React.ComponentProps<typeof BaseRadio.Root>) {
  return <BaseRadio.Root className={cx('ps-radio', className)} {...props}><BaseRadio.Indicator className="ps-radio__indicator" /></BaseRadio.Root>;
}

export function Slider({ className = '', ...props }: React.ComponentProps<typeof BaseSlider.Root>) {
  const values = Array.isArray(props.defaultValue) ? props.defaultValue : Array.isArray(props.value) ? props.value : [0];
  return <BaseSlider.Root className={cx('ps-slider', className)} {...props}><BaseSlider.Control className="ps-slider__control"><BaseSlider.Track className="ps-slider__track"><BaseSlider.Indicator className="ps-slider__indicator" /></BaseSlider.Track>{values.map((_, index) => <BaseSlider.Thumb className="ps-slider__thumb" key={index} />)}</BaseSlider.Control></BaseSlider.Root>;
}

export function Progress({ className = '', ...props }: React.ComponentProps<typeof BaseProgress.Root>) {
  return <BaseProgress.Root className={cx('ps-progress', className)} {...props}><BaseProgress.Track className="ps-progress__track"><BaseProgress.Indicator className="ps-progress__indicator" /></BaseProgress.Track></BaseProgress.Root>;
}

export function Meter({ className = '', children, ...props }: React.ComponentProps<typeof BaseMeter.Root>) {
  return <BaseMeter.Root className={cx('ps-meter', className)} {...props}><div className="ps-meter__meta"><BaseMeter.Label>{children}</BaseMeter.Label><BaseMeter.Value /></div><BaseMeter.Track className="ps-meter__track"><BaseMeter.Indicator className="ps-meter__indicator" /></BaseMeter.Track></BaseMeter.Root>;
}

export function Toggle({ className = '', ...props }: React.ComponentProps<typeof BaseToggle>) {
  return <BaseToggle className={cx('ps-toggle', className)} {...props} />;
}

export function ToggleGroup({ className = '', ...props }: React.ComponentProps<typeof BaseToggleGroup>) {
  return <BaseToggleGroup className={cx('ps-toggle-group', className)} {...props} />;
}

export function ToggleGroupItem({ className = '', ...props }: React.ComponentProps<typeof BaseToggle>) {
  return <BaseToggle className={cx('ps-toggle ps-toggle-group__item', className)} {...props} />;
}

export const InputGroup = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'div'>) => <div className={cx('ps-input-group', className)} {...props} />;
export const InputGroupAddon = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'span'>) => <span className={cx('ps-input-group__addon', className)} {...props} />;
export const ButtonGroup = ({ className = '', ...props }: React.ComponentPropsWithoutRef<'div'>) => <div className={cx('ps-button-group', className)} role="group" {...props} />;

export const NumberField = BaseNumberField.Root;
export function NumberFieldGroup({ className = '', ...props }: React.ComponentProps<typeof BaseNumberField.Group>) { return <BaseNumberField.Group className={cx('ps-number-field', className)} {...props} />; }
export function NumberFieldInput({ className = '', ...props }: React.ComponentProps<typeof BaseNumberField.Input>) { return <BaseNumberField.Input className={cx('ps-number-field__input', className)} {...props} />; }
export function NumberFieldIncrement({ className = '', children = '+', ...props }: React.ComponentProps<typeof BaseNumberField.Increment>) { return <BaseNumberField.Increment className={cx('ps-number-field__step', className)} {...props}>{children}</BaseNumberField.Increment>; }
export function NumberFieldDecrement({ className = '', children = '−', ...props }: React.ComponentProps<typeof BaseNumberField.Decrement>) { return <BaseNumberField.Decrement className={cx('ps-number-field__step', className)} {...props}>{children}</BaseNumberField.Decrement>; }

export function InputOTP({ className = '', length, ...props }: React.ComponentProps<typeof BaseOTPField.Root>) {
  return <BaseOTPField.Root className={cx('ps-otp', className)} length={length} {...props}>{Array.from({ length }, (_, index) => <BaseOTPField.Input className="ps-otp__input" key={index} />)}</BaseOTPField.Root>;
}
