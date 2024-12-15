export const LAB_TEST_TABLE = [
  { label: "Test", accessor: "test" },
  { label: "Value", accessor: "value" },
  { label: "Reference Range", accessor: "referenceRange" },
  {
    label: "Interpretation",
    accessor: "interpretation",
    render: (value) => {
      const getClassName = (value) => {
        switch (value.toLowerCase()) {
          case "normal":
            return "green";
          case "low":
            return "yellow";
          case "high":
            return "red";
          default:
            return "gray";
        }
      };

      return (
        <span className={`inter-capsule ${getClassName(value)}`}>
          {value}
        </span>
      );
    },
  },
];
