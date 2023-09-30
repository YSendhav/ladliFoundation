import React from "react";
import Header from "../../component/ui/Header";
import ATMOverlayCard from "../../component/atoms/ATMOverlayCard/ATMOverlayCard";
import Footer from "../../component/ui/Footer";

type Props = {
    advisoryImage: string;
    advisoryName: string;
    advisoryPosition: string;
    advisoryPlace?: string;
    advisoryDescription?: string;
};
type AdvisoryResponse = {
    advisoryDetail: Props[];
};

const Advisory = ({ advisoryDetail }: AdvisoryResponse) => {
    return (
        <div className="">
            <div className="flex flex-col gap-10">
                <div>
                    <Header title="ADVISORY & EXPERT COUNCIL" />
                </div>
                <div className="p-6 sm:px-20 md:px-16 lg:px-32">
                    <div className="grid md:grid-cols-3 gap-6 ">
                        {advisoryDetail?.map((advisory) => {
                            return (
                                <>
                                    <div>
                                        <ATMOverlayCard
                                            button={true}
                                            name={advisory?.advisoryName}
                                            image={advisory?.advisoryImage}
                                            position={advisory?.advisoryPosition}
                                            place={advisory?.advisoryPlace}
                                            description={advisory?.advisoryDescription}
                                        />
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Advisory;
