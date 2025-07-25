import { AllFormInterfacesType, FormFields } from '@tribu/forms';
import { Currencies, PaymentMethod } from '@tribu/targets';
export const transactionFormData: AllFormInterfacesType[] = [
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'transactionAmount',
    icon: 'transactionAmount',
    label: 'Transaction Amount',
    placeholder: 'Transaction Amount',
    type: FormFields.NUMBER_INPUT,
    required: true,
  },
  {
    label: 'Transaction Currency',
    placeholder: 'Transaction Currency',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: '',
    name: 'transactionCurrency',
    icon: 'transactionCurrency',
    type: FormFields.RADIO,
    elements: Object.values(Currencies).map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    label: 'Transaction Date',
    placeholder: 'Transaction Date',
    icon: 'transactionDate',
    name: 'transactionDate',
    type: FormFields.DATE_TIME,
    required: true,
  },
  {
    label: 'Payment Method',
    placeholder: 'Payment Method',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: '',
    name: 'paymentMethod',
    icon: 'paymentMethod',
    type: FormFields.RADIO,
    elements: Object.values(PaymentMethod).map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'purchaseLocation',
    placeholder: 'Purchase Location',
    icon: 'Purchase Location',
    label: 'Purchase Location',
    type: FormFields.INPUT,
    required: true,
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'purchaseCategory',
    placeholder: 'Purchase Category',
    icon: 'Purchase Category',
    label: 'Purchase Category',
    type: FormFields.INPUT,
    required: true,
  },
  {
    label: 'Loyalty Card Usage',
    placeholder: 'Loyalty Card Usage',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'loyaltyCardUsage',
    icon: 'loyaltyCardUsage',
    type: FormFields.RADIO,
    elements: ['true', 'false'].map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },
  {
    label: 'Discount Applied',
    placeholder: 'Discount Applied',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'discountApplied',
    icon: 'discountApplied',
    type: FormFields.RADIO,
    elements: ['true', 'false'].map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'returnFrequency',
    placeholder: 'Return Frequency',
    icon: 'Return Frequency',
    label: 'Return Frequency',
    type: FormFields.NUMBER_INPUT,
    required: true,
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'averageOrderValue',
    placeholder: 'Average Order Value',
    icon: 'Average Order Value',
    label: 'Average Order Value',
    type: FormFields.NUMBER_INPUT,
    required: true,
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'cartSize',
    placeholder: 'Cart Size',
    icon: 'Cart Size',
    label: 'Cart Size',
    type: FormFields.NUMBER_INPUT,
    required: true,
  },
  {
    label: 'Refunds Processed',
    placeholder: 'Refunds Processed',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'refundsProcessed',
    icon: 'refundsProcessed',
    type: FormFields.RADIO,
    elements: ['true', 'false'].map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },
  {
    label: 'Promotional Code Usage',
    placeholder: 'Promotional Code Usage',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'promotionalCodeUsage',
    icon: 'promotionalCodeUsage',
    type: FormFields.RADIO,
    elements: ['true', 'false'].map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'transactionId',
    placeholder: 'Transaction Id',
    icon: 'Transaction Id',
    label: 'Transaction Id',
    type: FormFields.INPUT,
    required: true,
  },

  {
    label: 'Vendor',
    placeholder: 'Vendor',
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'vendor',
    icon: 'vendor',
    type: FormFields.INPUT,
    required: true,
  },
  {
    label: 'Purchase Frequency',
    placeholder: 'Purchase Frequency',
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'purchaseFrequency',
    icon: 'purchaseFrequency',
    type: FormFields.NUMBER_INPUT,
    required: true,
  },
  {
    label: 'Recurring Purchases',
    placeholder: 'Recurring Purchases',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'recurringPurchases',
    icon: 'recurringPurchases',
    type: FormFields.RADIO,
    elements: ['true', 'false'].map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },
];
