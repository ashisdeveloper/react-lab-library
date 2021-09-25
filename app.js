import "./style.scss";
import classNames from "classnames";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { FaSpinner, FaCloudUploadAlt } from "react-icons/fa";

export const FormSubmit = ({ className, type = "submit", processing = false, text = "Save Changes" }) => {
	return (
		<button className={className} type={type} disabled={processing}>
			{processing && <FaSpinner className="fa-spin mr-2" />} {text}
		</button>
	);
};

export const FormInput = ({ label = "", required = false, maxLength = "255", type = "text", placeholder = "", wrapperClasses = "", className = "form-control", style = {}, readOnly = false, register, error = "" }) => {
	return (
		<div className={wrapperClasses != "" ? wrapperClasses : null}>
			{label != "" ? (
				<label htmlFor={register?.name ? register.name : ""}>
					{label}
					{required ? <span className="text-danger ml-1">*</span> : ""}
				</label>
			) : null}
			{type != "file" ? <input {...register} type={type} style={style} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })} id={register?.name ? register.name : ""} placeholder={placeholder != "" ? placeholder : null} maxLength={maxLength} /> : <input {...register} multiple type={type} style={style} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })} id={register?.name ? register.name : ""} maxLength={maxLength} />}

			<div className="invalid-feedback">{error}</div>
		</div>
	);
};

export const FormTextarea = ({ label = "", required = false, placeholder = "", wrapperClasses = "", className = "form-control", rows = "4", readOnly = false, register, error = "" }) => {
	return (
		<div className={wrapperClasses != "" ? wrapperClasses : null}>
			{label != "" ? (
				<label htmlFor="">
					{label}
					{required ? <span className="text-danger ml-1">*</span> : ""}
				</label>
			) : null}
			<textarea {...register} rows={rows} id={register?.name ? register.name : ""} readOnly={readOnly} className={classNames(className, { "is-invalid": error != "" })} placeholder={placeholder != "" ? placeholder : null}></textarea>
			<div className="invalid-feedback">{error}</div>
		</div>
	);
};

export const FormSelect = ({ label = "", required = false, disabled = false, wrapperClasses = "", className = "form-control custom-select", register, error = "", children }) => {
	return (
		<div className={wrapperClasses != "" ? wrapperClasses : null}>
			{label != "" ? (
				<label htmlFor="">
					{label}
					{required ? <span className="text-danger ml-1">*</span> : ""}
				</label>
			) : null}
			<select {...register} disabled={disabled} className={classNames(className, { "is-invalid": error != "" })}>
				{children}
			</select>
			<div className="invalid-feedback">{error}</div>
		</div>
	);
};

export const ContentCard = (props) => {
	return (
		<div className={classNames("content-card-layout", props.className)} style={{ minHeight: props?.minHeight ? props?.minHeight + "px" : "auto" }}>
			<div className="content-card-top">
				<div className="left">
					<div className="main-info">{props.title}</div>
				</div>
				<div className="right">{props.buttons}</div>
			</div>
			<div className="content-card">{props.children}</div>
		</div>
	);
};

export const ModalUI = ({ visibility = true, handleModal, closeButton = true, title = "", modalSize = "lg", centered = true, children }) => {
	<Modal className="customModal" show={visibility} onHide={() => handleModal(!visibility)} backdrop="static" size={modalSize} centered={centered}>
		{title && (
			<div className="modal-header">
				<div className="modal-title">{title}</div>
				{closeButton && (
					<button type="button" className="close" onClick={() => handleModal(!visibility)}>
						<AiOutlineClose />
					</button>
				)}
			</div>
		)}
		<Modal.Body>{children}</Modal.Body>
	</Modal>;
};
