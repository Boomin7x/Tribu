import { createSlice, nanoid } from '@reduxjs/toolkit';
import { AllFormInterfacesType, AppFormState } from '@tribu/forms';

const initialState: AppFormState = {
  sections: [{ formItems: [], id: '928JHAIDKWHAA-992JIH', index: 0 }],
  activeSection: 0,
  formTitle: '',
  formDescription: '',
  selectedField: null,
  audienceIds: [],
};

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { formTitle, formDescription, sections, audienceIds } =
        action.payload;
      state.formTitle = formTitle;
      state.formDescription = formDescription;
      state.sections = sections;
      state.activeSection = 0;
      state.audienceIds = audienceIds;
    },

    addFormField: (state, action) => {
      const field = {
        ...action.payload,
        id: nanoid(),
        index: state.sections[state.activeSection].formItems.length,
      };
      state.sections[state.activeSection].formItems.push(field);
      state.selectedField = field;
    },
    updateFormField: (state, action) => {
      const item: AllFormInterfacesType = action.payload;
      state.sections[item.activeSectionIndex].formItems[item.index] =
        action.payload;
      state.selectedField = action.payload;
      console.log(item);
    },
    setSortedItems: (state, action) => {
      state.sections[state.activeSection].formItems = action.payload;
    },
    removeFormField: (state, action) => {
      const newItems = state.sections[state.activeSection].formItems.filter(
        (field) => field.id != action.payload.id
      );
      state.sections[state.activeSection].formItems = newItems;
      if (state.selectedField?.id == action.payload.id) {
        state.selectedField = null;
      }
      if (newItems.length == 0) state.selectedField = null;
    },
    setSelectedField: (state, action) => {
      state.selectedField = action.payload;
    },
    updateFormTitle: (state, action) => {
      state.formTitle = action.payload;
    },
    updateFormDescription: (state, action) => {
      state.formDescription = action.payload;
    },
    addFormSection: (state, action) => {
      const field = {
        ...action.payload,
        id: nanoid(),
      };
      state.sections.splice(field.index, 0, field);
      // state.sections.push(field);
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    removeFormSection: (state, action) => {
      const newItems = state.sections.filter(
        (field) => field.id != action.payload.id
      );
      state.sections = newItems;

      // if (newItems.length == 0) state.selectedField = null;
      state.selectedField = null;
    },
    updateFormAudienceId: (state, action) => {
      state.audienceIds = action.payload;
    },
  },
});

export const {
  setFormData,
  addFormField,
  addFormSection,
  removeFormSection,
  setActiveSection,
  removeFormField,
  setSelectedField,
  setSortedItems,
  updateFormField,
  updateFormTitle,
  updateFormDescription,
  updateFormAudienceId,
} = FormSlice.actions;
export default FormSlice.reducer;
