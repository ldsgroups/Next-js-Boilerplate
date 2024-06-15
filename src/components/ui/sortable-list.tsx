'use client';

import { format } from 'date-fns';
import { enGB, fr } from 'date-fns/locale';
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  Reorder,
  useDragControls,
} from 'framer-motion';
import {
  BadgeDollarSignIcon,
  BellIcon,
  CalendarIcon,
  QrCodeIcon,
  ScanEyeIcon,
  TrashIcon,
} from 'lucide-react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useState } from 'react';
import useMeasure from 'react-use-measure';

import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/libs/utils';

import { Badge } from './badge';
import { Button } from './button';

export type Item = {
  id: string;
  title: string;
  isActive: boolean;
  commandedQuantity?: number;
  currency?: string;
  createdAt?: string;
  viewsCount?: number;
  link?: string;
};

interface SortableListItemProps {
  item: Item;
  order: number;
  locale: string;
  onSelectItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
  renderExtra?: (item: Item) => React.ReactNode;
  isExpanded?: boolean;
  className?: string;
  handleDrag: () => void;
}

// function CardLine({
//   icon,
//   text,
//   isTitle = false,
//   isAriaHidden = false,
//   onClick,
// }: {
//   icon?: LucideIcon;
//   text?: string;
//   isTitle?: boolean;
//   isAriaHidden?: boolean;
//   onClick?: () => void;
// }) {
//   const DynamicIcon = icon!;

//   return (
//     <div className="flex items-center">
//       {icon && (
//         <DynamicIcon
//           className="h-4 w-4 text-muted-foreground"
//           aria-hidden={isAriaHidden ? 'true' : 'false'}
//           onClick={onClick}
//         />
//       )}
//       {text && (
//         <span
//           className={cn(
//             'text-muted-foreground',
//             isTitle ? 'font-medium' : 'font-normal',
//           )}
//         >
//           {text}
//         </span>
//       )}
//     </div>
//   );
// }

function SortableListItem({
  item,
  order,
  onSelectItem,
  onRemoveItem,
  renderExtra,
  handleDrag,
  isExpanded,
  className,
  locale,
}: SortableListItemProps) {
  const [ref, bounds] = useMeasure();
  const [isDragging, setIsDragging] = useState(false);
  // TODO: ==> const [isDraggable, setIsDraggable] = useState(true);
  const isDraggable = true;
  const dragControls = useDragControls();
  const currentLocale = locale === 'fr' ? fr : enGB;

  const handleDragStart = (event: any) => {
    setIsDragging(true);
    dragControls.start(event, { snapToCursor: true });
    handleDrag();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <motion.div className={cn('', className)} key={item.id}>
      <div className="flex w-full items-center">
        <Reorder.Item
          value={item}
          className={cn(
            'relative z-auto grow',
            'h-full rounded-xl bg-[#FAFAFA] dark:bg-[#161716]/80',
            'shadow-[0px_1px_0px_0px_hsla(0,0%,100%,.03)_inset,0px_0px_0px_1px_hsla(0,0%,100%,.03)_inset,0px_0px_0px_1px_rgba(0,0,0,.1),0px_2px_2px_0px_rgba(0,0,0,.1),0px_4px_4px_0px_rgba(0,0,0,.1),0px_8px_8px_0px_rgba(0,0,0,.1)]',
            item.isActive
              ? 'bg-black/10 dark:bg-gray-800 cursor-not-allowed'
              : 'cursor-grab',
            item.isActive && !isDragging ? 'w-7/10' : 'w-full',
          )}
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            height: bounds.height > 0 ? bounds.height : undefined,
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.4,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.05,
              type: 'spring',
              bounce: 0.1,
            },
          }}
          layout
          layoutId={`item-${item.id}`}
          dragListener={!item.isActive}
          dragControls={dragControls}
          onDragEnd={handleDragEnd}
          style={
            isExpanded
              ? {
                  zIndex: 9999,
                  marginTop: 10,
                  marginBottom: 10,
                  position: 'relative',
                  overflow: 'hidden',
                }
              : {
                  position: 'relative',
                  overflow: 'hidden',
                }
          }
          whileDrag={{ zIndex: 9999 }}
        >
          <div ref={ref} className={cn(isExpanded ? '' : '', 'z-20 ')}>
            <motion.div
              layout="position"
              className="grid grid-cols-12 gap-4 items-center"
            >
              <AnimatePresence>
                {!isExpanded ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.001 }}
                    className="col-span-11"
                  >
                    <div className="flex items-center space-x-2">
                      {/* List Select Actions */}
                      <Checkbox
                        checked={item.isActive}
                        id={`checkbox-${item.id}`}
                        aria-label="Mark to select"
                        onCheckedChange={() => onSelectItem(item.id)}
                        className=" ml-3 h-5 w-5 rounded-md border-white/20 bg-black/30 data-[state=checked]:bg-black data-[state=checked]:text-red-200"
                      />
                      {/* List Order */}
                      <p className="font-mono text-xs pl-1 text-muted-foreground">
                        {order + 1}
                      </p>

                      {/* List Title */}
                      <div
                        key={`${item.id}`}
                        className=" px-1  pb-2 min-w-[150px] space-y-2"
                      >
                        <h4 className="tracking-tighter text-base md:text-lg text-muted-foreground">
                          {item.title}
                        </h4>
                        {item.isActive ? (
                          <Badge
                            title="Active"
                            className="ml-1"
                            variant="success"
                          >
                            Active
                          </Badge>
                        ) : (
                          <Badge
                            title="Inactive"
                            className="ml-1"
                            variant="warning"
                          >
                            Inactive
                          </Badge>
                        )}

                        {/* store link */}
                        {item.link && (
                          <button
                            type="button"
                            className="flex items-center gap-x-2"
                            onClick={() => {
                              window.open(item.link, '_blank');
                            }}
                          >
                            <QrCodeIcon
                              className="h-4 w-4 text-muted-foreground"
                              aria-hidden="true"
                            />
                            <p className="text-xs text-muted-foreground">
                              {item.link}
                            </p>
                          </button>
                        )}

                        {/* commanded quantity */}
                        {item.commandedQuantity && (
                          <div className="flex items-center gap-x-2">
                            <BellIcon className="h-4 w-4 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">
                              {item.commandedQuantity}
                              {' command'}
                              {item.commandedQuantity > 1 ? 's' : ''}
                            </p>
                          </div>
                        )}

                        {/* currency */}
                        {item.currency && (
                          <div className="flex items-center gap-x-2">
                            <BadgeDollarSignIcon className="h-4 w-4 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground uppercase">
                              {item.currency}
                            </p>
                          </div>
                        )}

                        {/* view count */}
                        {item.viewsCount && (
                          <div className="flex items-center gap-x-2">
                            <ScanEyeIcon className="h-4 w-4 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">
                              {item.viewsCount}{' '}
                              {item.viewsCount > 1 ? 'views' : 'view'}
                            </p>
                          </div>
                        )}

                        {/* created at */}
                        {item.createdAt && (
                          <div className="flex items-center gap-x-2">
                            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">
                              {format(item.createdAt, 'PPP', {
                                locale: currentLocale,
                              })}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {/* List Item Children */}
              {renderExtra && renderExtra(item)}
            </motion.div>
          </div>
          <div
            onPointerDown={isDraggable ? handleDragStart : undefined}
            style={{ touchAction: 'none' }}
          />
        </Reorder.Item>
        {/* List Select Action Animation */}
        <AnimatePresence mode="popLayout">
          {item.isActive ? (
            <motion.div
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.17,
                  duration: 0.17,
                  type: 'spring',
                  bounce: 0.6,
                },
                zIndex: 5,
              }}
              exit={{
                opacity: 0,
                x: -5,
                transition: {
                  delay: 0,
                  duration: 0.0,
                  type: 'spring',
                  bounce: 0,
                },
              }}
              className="-ml-[1px] h-[1.5rem] w-3 rounded-l-none  rounded-r-none border-y  border-y-white/5 border-r-white/10 bg-[#F2F2F2] dark:bg-[#161716]"
            />
          ) : null}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {item.isActive ? (
            <motion.div
              layout
              initial={{ opacity: 0, x: -5, filter: 'blur(4px)' }}
              animate={{
                opacity: 1,
                x: 0,
                filter: 'blur(0px)',
                transition: {
                  delay: 0.3,
                  duration: 0.15,
                  type: 'spring',
                  bounce: 0.9,
                },
              }}
              exit={{
                opacity: 0,
                filter: 'blur(4px)',
                x: -10,
                transition: { delay: 0, duration: 0.12 },
              }}
              className="inset-0 z-0 border-spacing-1  rounded-r-xl rounded-l-sm border-r-2   border-r-red-300/60 bg-[#F2F2F2]/80 dark:bg-[#161716]/80 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)] bg-[#F2F2F2]/50 dark:bg-[#161716]/50"
            >
              <Button
                type="button"
                size="icon"
                className="bg-gray-300 dark:bg-gray-800 size-10 hover:bg-destructive/60"
                onClick={() => onRemoveItem(item.id)}
              >
                <TrashIcon className="size-5 text-red-400 transition-colors duration-150 fill-red-400/60 " />
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

SortableListItem.displayName = 'SortableListItem';

interface SortableListProps {
  items: Item[];
  setItems: Dispatch<SetStateAction<Item[]>>;
  onSelectItem: (id: string) => void;
  renderItem: (
    item: Item,
    order: number,
    onSelectItem: (id: string) => void,
    onRemoveItem: (id: string) => void,
  ) => ReactNode;
}

function SortableList({
  items,
  setItems,
  onSelectItem,
  renderItem,
}: SortableListProps) {
  if (items) {
    return (
      <LayoutGroup>
        <Reorder.Group
          axis="y"
          values={items}
          onReorder={setItems}
          className="flex flex-col"
        >
          <AnimatePresence>
            {items?.map((item, index) =>
              renderItem(item, index, onSelectItem, (id: string) =>
                setItems((obj) => obj.filter((obj0) => obj0.id !== id)),
              ),
            )}
          </AnimatePresence>
        </Reorder.Group>
      </LayoutGroup>
    );
  }
  return null;
}

SortableList.displayName = 'SortableList';

export { SortableList, SortableListItem };
