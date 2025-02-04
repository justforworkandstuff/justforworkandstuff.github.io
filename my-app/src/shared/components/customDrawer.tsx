import { PaperProps, SwipeableDrawer } from "@mui/material";

interface CustomDrawerProps {
  showDrawer: boolean;
  onCloseDrawerCallback: () => void;
  contentItem: React.ReactNode;
  paperProps?: PaperProps;
}

const CustomDrawer = (props: CustomDrawerProps) => {
  const { showDrawer, onCloseDrawerCallback, contentItem, paperProps } = props;
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Disable backdrop Transition - iOS is hosted on high-end devices. The backdrop transition can be enabled without dropping frames.
  // The performance will be good enough.
  // Disable discovery - iOS has a "swipe to go back" feature that interferes with the discovery feature, so discovery has to be disabled.
  return (
    <>
      {showDrawer && (
        <div
          className="fixed inset-y-0 right-0 w-full bg-gray-300 bg-opacity-50 z-50"
          onClick={onCloseDrawerCallback} 
        />
      )}

      <SwipeableDrawer
        PaperProps={
          paperProps ?? {
            style: { backgroundColor: "transparent", paddingBottom: "4rem" },
          }
        }
        anchor={"left"}
        open={showDrawer}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        onClose={onCloseDrawerCallback}
        onOpen={() => null}
      >
        {contentItem}
      </SwipeableDrawer>
    </>
  );
};

export default CustomDrawer;
