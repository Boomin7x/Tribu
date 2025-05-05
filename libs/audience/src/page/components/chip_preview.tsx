import { AppChip } from '@tribu/ui';
import { AudienceBloc } from '../../data/interfaces/create_audience';
import { IoMdClose } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';
export const GenerateChipPreview = ({
  bloc,
  emptyField,
}: {
  bloc: AudienceBloc;
  emptyField: (data: AudienceBloc) => undefined;
}) => {
  const blocFields = bloc.fields.filter(
    (item) => item.metaData.value != undefined && item.metaData.value != ''
  );

  return (
    <AnimatePresence>
      {blocFields.map((question, index) => {
        console.log('question.metaData.value', question.metaData.value);
        return (
          <motion.div
            // key={`${question.key}-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            key={`${question.key}-y-${index}`}
          >
            <AppChip
              label={question.metaData.value}
              key={`${question.key}-y-${index}`}
              className="bg-gray-50 text-gray-800 font-light px-4  border border-gray-100 text-sm hover:border-gray-100"
              icon={
                <IoMdClose
                  className="hover:bg-gray-100 rounded-full w-6 h-6 p-1 "
                  onClick={() => {
                    question.metaData.value = undefined;
                    emptyField(bloc);
                  }}
                />
              }
            />
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
};
export default GenerateChipPreview;
