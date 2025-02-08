import { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import {
  FaHeading,
  FaRegImage,
  FaBriefcase,
  FaShop,
  FaCamera,
  FaPencil,
  FaUser,
  FaFile,
  FaWindowMaximize,
  FaBullhorn,
  FaStar,
  FaUserCheck,
  FaEnvelope,
  FaRegSquare,
  FaImages,
  FaVideo,
  FaKeyboard,
  FaListUl,
  FaToggleOn,
  FaCheck,
  FaSliders,
  FaBarsProgress,
  FaCommentDots,
  FaToolbox,
  FaInbox,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa6";
import { TbTextSize } from "react-icons/tb";

import { RxButton } from "react-icons/rx";
import ItemRenderer from "./ItemRenderer";
import { FaColumns, FaExpandAlt, FaThLarge } from "react-icons/fa";

const menuItems = ["Templates", "Layout", "Components"];

const items = {
  Templates: [
    {
      name: "Business",
      icon: FaBriefcase,
      description: "Professional website for companies and services",
    },
    {
      name: "E-Commerce",
      icon: FaShop,
      description: "Online store for selling products",
    },
    {
      name: "Portfolio",
      icon: FaCamera,
      description: "Showcase your work and projects",
    },
    { name: "Blog", icon: FaPencil, description: "Share articles and stories" },
    {
      name: "Personal",
      icon: FaUser,
      description: "Personal website for your online presence",
    },
    {
      name: "Custom Blank Page",
      icon: FaFile,
      description: "Start from scratch with a blank page",
    },
  ],
  Layout: [
    {
      name: "Page Layouts",
      subItems: [
        { name: "Full Page Layout", icon: FaWindowMaximize },
        { name: "Grid Layout", icon: FaThLarge },
        { name: "Header/Footer Layout", icon: FaColumns },
      ],
    },
    {
      name: "Section Layouts",
      subItems: [
        { name: "Hero Section", icon: FaBullhorn },
        { name: "Feature Section", icon: FaStar },
        { name: "Testimonial Section", icon: FaUserCheck },
        { name: "Contact Section", icon: FaEnvelope },
      ],
    },
  ],
  Components: [
    { name: "Accordion", icon: FaListUl },
    { name: "Alert", icon: FaBullhorn },
    { name: "Breadcrumb", icon: FaChevronRight },
    { name: "Button", icon: RxButton },
    { name: "Card", icon: FaRegSquare },
    { name: "Carousel", icon: FaImages },

    { name: "Dropdown", icon: FaChevronDown },
    { name: "Form", icon: FaInbox },
    { name: "Heading", icon: FaHeading },
    { name: "Image", icon: FaRegImage },

    { name: "Progress Bar", icon: FaBarsProgress },
    { name: "Rating", icon: FaStar },
    { name: "Slider", icon: FaSliders },
    { name: "Switch", icon: FaToggleOn },
    { name: "Tabs", icon: FaWindowMaximize },
    { name: "Tag", icon: FaStar },
    { name: "Text", icon: TbTextSize },
    { name: "Tooltip", icon: FaToolbox },
    { name: "Video", icon: FaVideo },
    

  ],
};

export default function SidePane() {
  const [selectedMenu, setSelectedMenu] =
    useState<keyof typeof items>("Templates");

  const [expandedLayouts, setExpandedLayouts] = useState<
    Record<number, boolean>
  >({ "0": true, "1": true });

  const toggleExpand = (index: number) => {
    setExpandedLayouts((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the clicked layout
    }));
  };

  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  return (
    <div className="w-64 bg-gray-100 p-4 border-r border-gray-200 h-screen overflow-y-auto">
      <Menu as="div" className="relative inline-block text-left w-full mb-4">
        <MenuButton className="inline-flex w-full justify-between rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {selectedMenu}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </MenuButton>

        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {menuItems.map((item) => (
              <MenuItem key={item}>
                {({ focus }) => (
                  <a
                    href="#"
                    className={`${
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm`}
                    onClick={() => setSelectedMenu(item as keyof typeof items)}
                  >
                    {item}
                  </a>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>

      <div>
        {selectedMenu == "Components" &&
          items[selectedMenu].map((component, index) => (
            <div key={index} className="mb-4 hover:bg-gray-200 p-2 rounded-md">
              <div className="flex items-center">
                <component.icon className="mr-2" />
                <span>{component.name}</span>
              </div>
            </div>
          ))}
        {selectedMenu == "Layout" &&
          items[selectedMenu].map((layout, index) => (
            <div key={index} className="mb-4">
              {/* Clickable Header */}
              <div
                className="flex items-center justify-between hover:bg-gray-200 p-2 rounded-md cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-center">
                  <span>{layout.name}</span>
                </div>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    expandedLayouts[index] ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* SubItems (Toggle Visibility) */}
              {expandedLayouts[index] && (
                <div className="ml-4">
                  {layout.subItems.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="mb-4 hover:bg-gray-200 p-2 rounded-md"
                    >
                      <div className="flex items-center">
                        <subItem.icon className="mr-2 h-[12px]" />
                        <span>{subItem.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        {selectedMenu === "Templates" && (
          <div className="grid grid-cols gap-4">
            {items.Templates.map((template, index) => (
              <div
                key={index}
                className={`bg-white p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer border ${
                  selectedTemplate === index
                    ? "border-blue-500"
                    : "border-transparent hover:border-blue-100"
                }`}
                onClick={() => setSelectedTemplate(index)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <template.icon className="w-4 h-4 text-blue-600" />
                  <h3 className="font-medium">{template.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{template.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
