# react-lab-library

This React library is just a collection of UI components.

## Install

```
npm i react-lab-library
```

## Getting Started

| Component      | parameters                                                                                                                                                                              |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FormInput`    | `label = "", required = false, maxLength = "255", type = "text", placeholder = "", wrapperClasses = "", className = "form-control", style = {}, readOnly = false, register, error = ""` |
| `FormTextarea` | `label = "", required = false, placeholder = "", wrapperClasses = "", className = "form-control", style = {}, rows = "4", readOnly = false, register, error = ""`                       |
| `FormSelect`   | `label = "", required = false, disabled = false, wrapperClasses = "", className = "form-control custom-select", style = {}, register, error = "", children`                             |
| `FormSubmit`   | `className, type = "submit", processing = false, text = "Save Changes"`                                                                                                                 |
| `ContentCard`  | `title = "", buttons = "", className = "", minHeight = "", children`                                                                                                                    |
| `ModalUI`      | `visibility = true, handleModal, closeButton = true, title = "", modalSize = "lg", centered = false, children`                                                                          |
