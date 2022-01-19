import cx from 'classnames';

interface ButtonTypeProps {
  title: string;
  active?: boolean;
  href: string;
}
export default function ButtonTab(props: Partial<ButtonTypeProps>) {
  const { title, active, href } = props;
  const btnClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <a data-filter="*" href={`/member/transactions${href}`} className={btnClass}>
      {' '}
      {title}
      {' '}
    </a>
  );
}
