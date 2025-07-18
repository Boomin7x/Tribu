import { AllFormInterfacesType, FormFields } from '@tribu/forms';
import dateIcon from '../../assets/icons/datetime.svg';
import ranking from '../../assets/icons/ranking.svg';
import slider from '../../assets/icons/slider.svg';
import divider from '../../assets/icons/divider.svg';
import matrix from '../../assets/icons/matrix.svg';
import multiple_selection from '../../assets/icons/multiple_selection.svg';
import number_input from '../../assets/icons/number_input.svg';
import paragraph from '../../assets/icons/paragraph.svg';
import rating from '../../assets/icons/rating.svg';
import single_selection from '../../assets/icons/single_selection.svg';
import text from '../../assets/icons/text.svg';
import textarea from '../../assets/icons/textarea.svg';
// import { faker } from "@faker-js/faker";

export const draggableItems: AllFormInterfacesType[] = [
  {
    type: FormFields.RADIO,
    name: 'string',
    isPreview: false,
    label: 'Single Selection',
    placeholder: 'placeholder',
    required: false,
    icon: single_selection,
    value: 0,
    index: 0,
    id: 'draggable_radio',
    elements: [],
    activeSectionIndex: 0,
  },
  {
    type: FormFields.CHECKBOX,
    name: 'string',
    isPreview: false,
    label: 'Multiple Selection',
    placeholder: 'Placeholder',
    required: false,
    icon: multiple_selection,
    value: [],
    index: 1,
    id: 'draggable_checkbox',
    elements: [],
    activeSectionIndex: 0,
  },
  {
    type: FormFields.INPUT,
    name: 'string',
    isPreview: false,
    label: 'Text response',
    placeholder: 'Placeholder',
    required: false,
    icon: text,
    value: '',
    index: 2,
    activeSectionIndex: 0,
    id: 'draggable_text_response',
  },

  {
    type: FormFields.NUMBER_INPUT,
    name: 'string',
    isPreview: false,
    label: 'Number Field',
    placeholder: 'Placeholder',
    required: false,
    icon: number_input,
    value: 0,
    id: 'draggable_number_input',
    activeSectionIndex: 0,
    index: 3,
  },
  {
    type: FormFields.TEXTAREA,
    name: 'string',
    isPreview: false,
    label: 'Description',
    placeholder: 'Placeholder',
    required: false,
    icon: textarea,
    value: '',
    maxLength: 255,
    id: 'draggable_textarea',
    index: 4,
    activeSectionIndex: 0,
  },

  {
    type: FormFields.SLIDER,
    name: 'string',
    isPreview: false,
    label: 'Slider',
    placeholder: 'Placeholder',
    required: false,
    icon: slider,
    value: 0,
    id: 'draggable_slider',
    activeSectionIndex: 0,
    index: 5,
  },
  {
    type: FormFields.RATING,
    name: 'string',
    isPreview: false,
    label: 'Rating Star',
    placeholder: 'Placeholder',
    required: false,
    icon: rating,
    value: 0,
    id: 'draggable_rating',
    activeSectionIndex: 0,
    index: 5,
  },
  {
    type: FormFields.RANKING,
    name: 'string',
    isPreview: false,
    label: 'Ranking',
    placeholder: 'Placeholder',
    required: false,
    icon: ranking,
    value: 0,
    id: 'draggable_ranking',
    index: 6,
    steps: [],
    stepLabels: [],
    activeSectionIndex: 0,
  },
  {
    type: FormFields.MATRIX_TABLE,
    name: 'string',
    isPreview: false,
    label: 'Matrix Table',
    placeholder: 'Placeholder',
    required: false,
    icon: matrix,
    value: '',
    id: 'draggable_matrix',
    rows: [],
    columns: [],
    selectedItems: [],
    index: 7,
    activeSectionIndex: 0,
  },
  {
    type: FormFields.DATE_TIME,
    name: 'string',
    isPreview: false,
    label: 'Date Time',
    placeholder: 'Placeholder',
    required: false,
    icon: dateIcon,
    value: new Date(),
    id: 'draggable_date_time',
    activeSectionIndex: 0,
    index: 8,
  },
  {
    type: FormFields.DIVIDER,
    icon: divider,
    id: 'draggable_divider',
    name: 'divider',
    label: 'Divider',
    activeSectionIndex: 0,
    index: 9,
  },
  {
    type: FormFields.PARAGRAPH,
    name: 'string',
    isPreview: false,
    label: 'Paragraph',
    placeholder: 'Placeholder',
    required: false,
    icon: paragraph,
    value: '',
    id: 'draggable_paragraph',
    index: 10,
    maxLength: 255,
    activeSectionIndex: 0,
  },
];
