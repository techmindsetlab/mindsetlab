import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  to: string;
  onMouseEnter?: React.MouseEventHandler<HTMLParagraphElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLParagraphElement>;
  additionalStyle?: string;
}

const AnimatedLink = ({
  to,
  name,
  onMouseLeave,
  onMouseEnter,
  additionalStyle,
}: Props) => {
  return (
    <Link to={to} className={`link flex items-center mix-blend-difference ${additionalStyle}`}>
      <span
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="mask text-[#FAFAFA]"
      >
        <div className="link-container">
          <span className="link-title1 title">{name}</span>
          <span className="link-title2 title">{name}</span>
        </div>
      </span>
      {name === "contact" && (
        <div className="link-icon">
          <FaArrowRightLong
            className="icon mix-blend-difference"
            color="#FAFAFA"
          />
          <FaArrowRightLong
            className="icon mix-blend-difference"
            color="#FAFAFA"
          />
        </div>
      )}
    </Link>
  );
};

export default AnimatedLink;
